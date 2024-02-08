
<script lang="ts">
    export let srch_value:String;
    export let srchInputHandeler:Function;
</script>
<input
    type="text"
    class="bg-[#00000000] w-3/4 h-full outline-none"
    placeholder="Search.."
    bind:value={srch_value}
    on:input={() => srchInputHandeler()}
/>