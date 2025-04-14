<script lang="ts">
    let { children } = $props();

    import { page } from '$app/state';
    let chatUrl: string = $state(`https://twitch.tv/embed/${page.params.chat}/chat?parent=${page.url.hostname}&darkpopout`);
    let videoUrl: string = $state(``);
    if (page.params.video) {
        videoUrl = page.params.video;
    } else {
        videoUrl = `https://vkvideo.ru/video_ext.php?oid=${page.params.vkoid}&id=${page.params.vkid}&autoplay=1`;
    }
</script>

<div id="wrapper-container">
    <div id="video-container">
        <iframe title="video" id="ext-video" allow="fullscreen" src="{videoUrl}"></iframe>
    </div>
    <div id="chat-container">
        <iframe title="chat" id="twitch-chat" src="{chatUrl}"></iframe>
    </div>
</div>

{@render children?.()}

<style>
    #chat-container {
        width: 341px; 
        height: 100%;
        background-color: black;
        overflow: hidden;
        flex-shrink: 0;
    }

    #wrapper-container {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    }
    #video-container {
        flex: 1;
        height: 100%;
        background-color: black;
        overflow: hidden;
        min-width: 0;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    /* Portrait Mode */
        @media only screen and (orientation: portrait) {
        #wrapper-container {
            flex-direction: column;
        }
        #chat-container {
            width: 100%;
            height: 400px;
        }
        #video-container {
            height: calc(100% - 400px);
        }
    }

    /* Landscape Mode */
    @media only screen and (orientation: landscape) {
        #wrapper-container {
            flex-direction: row;
        }
        #chat-container {
            width: 341px;
        }
    }
</style>