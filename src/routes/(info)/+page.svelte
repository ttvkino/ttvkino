<script lang="ts">
    import { page } from '$app/state';
    let chatInputValue = $state('Chat name');
    let videoInputValue = $state('Any Video URL');
</script>

<h1>Enter chat and (embeddable) video URL</h1>

<div id="input-container">
    <input type="text" id="input-chat" placeholder="Chat name" bind:value={chatInputValue}>
    <input type="text" id="input-video-url" placeholder="Any Video URL" bind:value={videoInputValue}>
</div>

<h1>Fetch link here:</h1>
<div class="output" id="result">{page.url.origin}/{chatInputValue}/{encodeURIComponent(videoInputValue)}</div>     

<style>
    #result {
        margin-top: 10px;
        color: black;
        background-color: white;
        padding: 10px;
        border: 1px solid #ccc;
        word-wrap: break-word; 
    }
</style>
