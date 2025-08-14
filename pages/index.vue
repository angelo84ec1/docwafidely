<template>



</template>
<script setup>
definePageMeta({
    name: "IndexPage",
    middleware: ["auth"],
})

// onMounted(async () => { 
//     const response = await fetch(`http://localhost:1337/api/establecimientos`, {
//           method: "GET",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
         
//         });

// console.log('response', response)
      
//     });


</script>