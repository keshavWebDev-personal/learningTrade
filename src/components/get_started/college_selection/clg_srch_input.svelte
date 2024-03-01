<script lang="ts">
    import { collegelist, Mcolleges as collegelistOg } from "./store.ts";
    import type { College } from '../../get_started.interface.ts'

    let srch_value: string = "";
    let filtered: College[] = [];

    function srchInputHandeler() {
        if (srch_value == "") {
            collegelist.set(collegelistOg);
            return;
        }
        collegelist.subscribe((data) => {
            filtered = data.filter((clg) => {
                const search = srch_value.toLowerCase();
                if (clg.name.toLowerCase().includes(search)) {
                    return true;
                }
            });
        });
        collegelist.set(filtered);
    }
    srchInputHandeler();

    function srchClear(){
        collegelist.set(collegelistOg);
            let input = document.getElementById("input") as HTMLInputElement|null 
            if (!input) return
            input.value = ''
    }
</script>

<div
    class="lg:w-96 lg:h-14 lg:p-3 md:text-lg text-sm sm:w-80 sm:h-12  p-2 w-[50%] h-10 rounded-full b bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex items-center justify-between dark:border dark:border-[#3d3d3d] dark:from-[#372d37c2]  dark:to-[#525252c2] gap-2 "
>
    <div
        class=" rounded-full bg-[#004AAD] lg:w-10 lg:p-2 sm:w-8 sm:p-2 w-6 p-1 text-white fill-white"
    >
        <img src="svg/search-icon.svg" alt="" srcset="" />
    </div>
    <input
        type="text"
        id="input"
        class="bg-[#00000000] w-3/4 h-full outline-none"
        placeholder="Search.."
        bind:value={srch_value}
        on:input={() => srchInputHandeler()}
    />
    <button
        on:click={() => srchClear()}
    >
        <svg class="dark:fill-white fill-black sm:w-5 w-3 mr-2 " height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve">
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
        </svg>
    </button>
</div>
