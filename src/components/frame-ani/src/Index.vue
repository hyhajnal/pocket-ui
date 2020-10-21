<template>
    <div>
        <CssFrameAni v-if="mode === 'css' && cssAniConfig" :config="cssAniConfig" />
        <CanvasFrameAni v-if="mode === 'canvas' && canvasAniConfig" :config="canvasAniConfig" />
    </div>
</template>

<script>
import CanvasFrameAni from './CanvasFrameAni'
import CssFrameAni from './CssFrameAni'
import { registerKeyframe } from './util'

export default {
    name: 'PocFrameAni',
    props: {
        mode: {
            type: String,
            default: 'css'
        },
        config: {
            type: Object
        }
    }, 
    components: {
        CanvasFrameAni,
        CssFrameAni
    },
    data () {
        return {
            cssAniConfig: null,
            canvasAniConfig: null,
        }
    },
    mounted() {
        if (this.mode === 'css') {
            registerKeyframe([this.config])
            this.cssAniConfig = this.config
            return
        }
        this.canvasAniConfig = this.config
    },
    methods: {
        
    },
}
</script>