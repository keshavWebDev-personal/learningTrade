<script lang="ts">
    import { collegelist, Mcolleges as collegelistOg } from "./store.ts";

    type College = {
        name: string;
        address: {
            local: string;
            city: string;
            district: string;
            state: string;
            country: string;
        };
    };
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
    class="lg:w-96 lg:h-14 lg:p-3 md:text-lg text-sm sm:w-80 sm:h-12 sm:p-2 w-2/3 h-10 p-1 rounded-full b bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex items-center justify-between"
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
        <img src="svg/cross.svg" alt="" srcset="" class=" sm:w-5 w-3 mr-2" />
    </button>
</div>
