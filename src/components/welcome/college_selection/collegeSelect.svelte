<script lang="ts">
    export let colleges: College[] = [];

    interface College {
        name: string;
        address: {
            local: string;
            city: string;
            district: string;
            state: string;
            country: string;
        };
    }
    let filteredColleges: College[] = [];
    let srch_value = '';
    function srchInputHandeler() {        
        if (srch_value == "") {
            filteredColleges = colleges;
            return;
        }
        filteredColleges = colleges.filter((clg)=>clg.name.toLowerCase().includes(srch_value.toLowerCase()))
    }
    function clear() {
        srch_value = ''
        srchInputHandeler()
    }
    srchInputHandeler()
    
</script>

<div
    class="h-screen max-h-max w-full flex flex-col items-center p-0 m-0 box-border"
>
    <div class="flex flex-col w-4/6 h-full">
        <div class=" w-full flex items-center mt-12 gap-4">
            <img
                src="svg/back_button.svg"
                width="1.25rem"
                height="1.25rem"
                alt=""
                srcset=""
                class=" w-5"
            />
            <!-- progrress-bar -->
            <div class=" bg-gray-200 w-full h-1 flex rounded-lg">
                <!-- progrress-bar-completed -->
                <span class=" w-1/6 bg-green-600"></span>
            </div>
        </div>
        <label for="" class="font-[HelveticaWorld] text-6xl mt-10"
            >Tell us about your College</label
        >
        <div class=" w-full h-full flex flex-col items-center mt-10">
            <!-- search-container -->
            <div
                class=" justify-between w-96 h-14 rounded-full b bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex items-center p-3"
            >
                <div
                    class=" rounded-full bg-[#004AAD] w-10 p-2 text-white fill-white"
                >
                    <img src="svg/search-icon.svg" alt="" srcset="" />
                </div>
                <input
                    type="text"
                    class="bg-[#00000000] w-3/4 h-full outline-none"
                    placeholder="Search.."
                    bind:value={srch_value}
                    on:input={() => srchInputHandeler()}
                />
                <button on:click={clear}>
                    <img
                    src="svg/cross.svg"
                    alt=""
                    srcset=""
                    class=" w-5 mr-2"
                    width="1.25rem"
                    height="1.25rem"
                />
                </button>
                
            </div>
            <div
                class="w-full h-full max-h-fit bg-gradient-to-r from-[#FFF7AD] to-[#FFA9F9] flex flex-col items-center mt-4 rounded-t-3xl font-[poppins]"
            >
                {#each filteredColleges as item}
                    <button
                        class="  focus:bg-green-200 border-2 border-white bg-gray-100 min-h-20 w-1/2 text-2xl flex items-center pl-6 rounded-3xl mt-6  hover:scale-[1.02] transform-gpu shadow hover:shadow-lg  transition duration-200 "
                    >
                        {item.name}
                    </button>
                {/each}
            </div>
        </div>
    </div>
</div>
