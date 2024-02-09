<script lang="ts">
    import collegelist from './store.ts'
    type College = { 
        name: string;
        address: {
            local: string;
            city: string;
            district: string;
            state: string;
            country: string;
        };
    }
    
    function cptlFstL(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let buttons: College[]=[];

    collegelist.subscribe((colleges)=>{
        buttons = colleges.map((item)=>{
            return item
        })
    })
</script>

<div
    class=" pb-5 w-full h-full max-h-fit bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex flex-col items-center mt-4 rounded-t-3xl font-[poppins]"
>
    {#each buttons as item}
    <button
        class=" active:scale-[0.99] active:bg-gray-200 focus:bg-green-200 focus:shadow-lg focus:scale-[1.02] border-2 border-white bg-gray-100 sm:min-h-20 min-h-16 md:w-1/2 sm:w-3/4 w-11/12  xl:text-2xl lg:text-xl md:text-base sm:text-sm text-xs text-left sm:px-6 sm:py-3 px-3 py-1 rounded-3xl mt-6 hover:scale-[1.02] transform-gpu shadow hover:shadow-lg hover:bg-gray-50 transition duration-200"
    >
        {item.name}
        <br />
        <p class=" xl:text-base lg:text-sm md:text-xs sm:text-[0.7rem] text-[0.5rem] ">
            {cptlFstL(item.address.local)},
            {cptlFstL(item.address.city)},
            {cptlFstL(item.address.district)},
            {cptlFstL(item.address.state)},
            {cptlFstL(item.address.country)}
        </p>
    </button>
    {/each}
</div>