<script>
    export let colleges = []; 
    

</script>
<div class="flex flex-col">
    <label for="college">Select your College:</label>
    <input type="text">
    <select name="college" id="">
        {#each colleges as item }
            <option value="{item.name}">{item.name}</option>
        {/each}
    </select>
</div>

<style>
    *{
        display: flex;

    }
</style>