<template>
  <vue-meeting-selector ref="meetingSelector" class="meeting-selector w-[100%] md:w-[50%]" v-model="meeting" :date="date"
    :loading="false" :meetings-days="meetingsDays" @next-date="nextDate" @previous-date="previousDate"
    @update:modelValue="change" />

 
  <TransitionRoot as="template" :show="openModal">
    <Dialog class="relative z-10" @close="cancelModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <form class="" @submit.prevent="sendData">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <div v-if="isCongrats" class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-medium leading-6 text-green-900">Congratulations!!
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">Your Date and Time is Saved</p>
                      </div>
                    </div>
                    <div v-else class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-medium leading-6 text-gray-900">Provide All Information
                      </DialogTitle>
                      <div class="mt-2">
                        <div class="mb-2">
                          <label class="text-sm font-medium leading-6 text-gray-900 block mb-1" for="date">Date:</label>
                          <input class="w-full rounded-md" type="date" id="date" v-model="form.date" required>
                        </div>
                        <div class="mb-2">
                          <label class="text-sm font-medium leading-6 text-gray-900 block mb-1" for="hour">Hour:</label>
                          <input class="w-full rounded-md" type="time" id="hour" v-model="form.hour" required>
                        </div>
                        <div class="mb-2">
                          <label class="text-sm font-medium leading-6 text-gray-900 block mb-1"
                            for="whatsapp">WhatsApp:</label>
                          <input class="w-full rounded-md" type="text" id="whatsapp" placeholder="whatsapp number" v-model="form.whatsapp" required>
                        </div>
                        <div>
                          <label class="text-sm font-medium leading-6 text-gray-900 block mb-1"  for="name">Name:</label>
                          <input class="w-full rounded-md" type="text" id="name" placeholder="name" v-model="form.name" required>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="submit" v-if="!isCongrats"
                    class="inline-flex gap-2 w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 sm:ml-3 sm:w-auto">Save
                    Date
                    <div v-if="loadingBtn" class="simple-spinner">
                      <span></span>
                    </div>
                  </button>
                  <button type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 transition-all duration-300 ring-inset ring-gray-300 hover:bg-gray-200 sm:mt-0 sm:w-auto"
                    @click.prevent="cancelModal" ref="cancelButtonRef"> {{ isCongrats ? 'Close' : 'Cancel' }}</button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import { defineComponent, ref } from "vue";
import VueMeetingSelector from "vue-meeting-selector";
import "vue-meeting-selector/dist/style.css";
import slotsGenerator from "@/helpers/slotsGenerator";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'


const props = defineProps({
  disabledData: {
    type: Array,
    default: [],
  },
  establishmentId: {
    type: String
  }

})

const {
  public: { baseURL },
} = useRuntimeConfig();

const route = useRoute()

const emit = defineEmits(['fetchCalender'])
const meeting = ref(null);
const meetingsDays = ref([]);
const nbDaysToDisplay = ref(7);
const date = ref(new Date());
const openModal = ref(false)
const loadingBtn = ref(false)
const isCongrats = ref(false)
const calenderData = ref([]);

const form = reactive({
  date: '',
  hour: "",
  whatsapp: '',
  name: '',
  establecimientos:[]
  // email: "paul@gmail.com",
  // numbersend: "2",
  // status: "active",
  // confirm:"yes",
  // cancel:"no",
})



const getDateTime = computed(() => {
  const dateObj = new Date(meeting.value?.date);

  // Extract date in YYYY-MM-DD format
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(dateObj.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  // Extract time in HH:MM format
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;

  console.log("Date:", date); // Output: Date: 2024-05-25
  console.log("Time:", time); // Output: Time: 08:30

  return { date, time };
})

const disabledTimes = [
  new Date(2024, 5, 29, 10, 0),  // May 25, 2024 10:00 AM
  new Date(2024, 5, 31, 14, 0),  // May 25, 2024 2:00 PM
];

const initMeetingsDays = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 18,
    minutes: 0,
  };
  meetingsDays.value = slotsGenerator(
    new Date(),
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};



initMeetingsDays();

const meetingSelector = ref(null);

const up = () => meetingSelector.value.previousMeetings();

const down = () => meetingSelector.value.nextMeetings();

const nextDate = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 16,
    minutes: 0,
  };
  const d = new Date(date.value);
  const newDate = new Date(d.setDate(d.getDate() + 7));
  date.value = newDate;
  meetingsDays.value = slotsGenerator(
    newDate,
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};

const previousDate = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 16,
    minutes: 0,
  };
  const d = new Date(date.value);
  d.setDate(d.getDate() - 7);
  const formatingDate = (dateToFormat) => {
    const dateParsed = new Date(dateToFormat);
    const day =
      dateParsed.getDate() < 10
        ? `0${dateParsed.getDate()}`
        : dateParsed.getDate();
    const month =
      dateParsed.getMonth() + 1 < 10
        ? `0${dateParsed.getMonth() + 1}`
        : dateParsed.getMonth() + 1;
    const year = dateParsed.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const newDate =
    formatingDate(new Date()) >= formatingDate(d)
      ? new Date()
      : new Date(d);
  date.value = newDate;
  meetingsDays.value = slotsGenerator(
    newDate,
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};

const change = () => {
  console.log(meeting.value);
  form.date = getDateTime.value.date
  form.hour = getDateTime.value.time
  openModal.value = true;
  // sendData()
};

const cancelModal = () => {
  openModal.value = false;
  meeting.value = null
  if(isCongrats.value) {
    emit("fetchCalender")
  }

}

const sendData = async () => {
 
  try {

    form.establecimientos.push(props.establishmentId)
    console.log('form', form)
    // form.establecimiento = props.establishmentId
    loadingBtn.value = true;
    const response = await fetch(`${baseURL}/citas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Failed to send data: ' + response.statusText);
    }

    const responseData = await response.json();
    isCongrats.value = true
    console.log('Response data:', responseData);
  } catch (error) {
    console.error('Error sending data:', error);
  } finally {
    loadingBtn.value = false
    meeting.value = null;
  }
}




</script>



<style scoped lang="scss">
.simple-spinner {
  width: 16px;
  height: 16px;

}

.simple-spinner span {
  display: block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-radius: 50%;
  border-right-color: rgba(255, 255, 255, 0.7);
  animation: spinner-anim 0.8s linear infinite;
}

@keyframes spinner-anim {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>