<script>
    export let colleges = [];
</script>

<div class="h-screen w-screen flex flex-col items-center p-0 m-0 box-border">
    
    <div class="flex flex-col  w-4/6  h-full">
        <div class=" w-full flex items-center mt-12 gap-4 ">
            <img src="svg/back_button.svg" alt="" srcset="" class=" w-5" >
    
            <div class=" bg-gray-200 w-full h-1 flex rounded-lg" name="progrress-bar" >
                <span name="progrress-bar-completed" class=" w-1/6 bg-green-600 " ></span>
            </div>   
        </div>
        <label for="" class="text-6xl mt-6 " >Tell us about your College</label>
        <div class=" w-full h-full flex flex-col items-center mt-8" >
            <div class=" justify-between w-96 h-14 rounded-full b bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex items-center p-3" name="search-container">
                <div class=" rounded-full  bg-[#004AAD] w-10 p-2 text-white fill-white"><img src="svg/search-icon.svg" alt="" srcset=""></div>
                <input type="text" class="bg-[#00000000] w-3/4 h-full outline-none " placeholder="Search..">
                <img src="svg/cross.svg" alt="" srcset="" class=" w-5 mr-2" >
            </div>
            <div class="w-full h-full bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex flex-col items-center mt-4 rounded-t-3xl ">
                {#each colleges as item}
                    <div class=" border-2 border-white bg-gray-100  h-20 w-1/2 text-2xl flex items-center pl-6 rounded-3xl mt-6"  >{item.name}</div>
                {/each}
            </div>
        </div>

    </div>
</div>
<style>
    
</style>