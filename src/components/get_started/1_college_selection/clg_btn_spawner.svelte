<script lang="ts">
    import { collegelist } from "./store.ts";
    import type { College } from "./store.ts";

    function cptlFstL(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let buttons: College[] = [];
        
    collegelist.subscribe((colleges) => {
        buttons = colleges.map((item) => {
            return item;
        });
    });
</script>

<div class="w-full grid place-items-center select-none">
    {#each buttons as item}
        <button
        
            class=" active:scale-[0.99] active:bg-gray-200 focus:bg-green-200 focus:shadow-lg focus:scale-[1.02] border-2 border-white bg-gray-100 sm:min-h-20 min-h-16 md:w-1/2 sm:w-3/4 w-11/12 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-left sm:px-6 sm:py-5 px-4 py-1 rounded-3xl mt-6 hover:scale-[1.02] transform-gpu shadow hover:shadow-lg hover:bg-gray-50 transition duration-200 flex items-center justify-between dark:bg-neutral-700 dark:border dark:border-[#747474] dark:hover:bg-neutral-600 dark:focus:bg-[#415543]"
            id={item.id}
            aria-label="trig_button"
        >
            <span class="">
                <p>{item.collegeList.name}</p>

                <p
                    class="font-[SourceCodePro] xl:text-base lg:text-sm md:text-xs sm:text-[0.7rem] text-[0.5rem] dark:text-neutral-300"
                
                >
                    {cptlFstL(item.address_local.name)},
                    {cptlFstL(item.address_city.name)},
                    {cptlFstL(item.address_district.name)},
                    {cptlFstL(item.address_state.name)},
                    {cptlFstL(item.address_country.name)}
                </p>
            </span>

            <p
                class="font-[BebasNeue] xl:text-2xl text-lg"
            
            >
                {item.collegeList.alias}
            </p>
        </button>
    {/each}
</div>
