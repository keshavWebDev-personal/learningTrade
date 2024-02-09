<script lang="ts">
    import collegelist from './store.ts'
    import collegelistOg from '../../../data/collegelist.json'

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
    let srch_value: string = "";
    let filtered: College[] = []

    function srchInputHandeler() {
        if (srch_value == ''){
            collegelist.set(collegelistOg)
            return
        }
        collegelist.subscribe((data)=>{
            filtered = data.filter(clg=>{
                const search = srch_value.toLowerCase();
                if (clg.name.toLowerCase().includes(search)) {
                    return true
                }
            })
        })
        collegelist.set(filtered)
    }
    srchInputHandeler()

</script>

<input
    type="text"
    class="bg-[#00000000] w-3/4 h-full outline-none"
    placeholder="Search.."
    bind:value={srch_value}
    on:input={() => srchInputHandeler()}
/>