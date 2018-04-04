<template>
	<div>
        <h2>TEST {{msg}}</h2>
        <hr/>
        <h3 @click="sureAddCount">加“{{count}}”</h3>
        <h3 @click="sureReduceCount">减“{{other_count}}”</h3>
        <h1>{{count}}{{other_count}}</h1>
    </div>
</template>

<script>
	import {mapState} from 'vuex';
	
    export default{
        data(){
            return{
                msg:'Hello Vuex',

            }
        },
        computed: {
            ...mapState(['count','other_count'])
        },
        methods:{
        		sureAddCount(){       			
        			this.$store.dispatch('addFn',5);
        		},
        		sureReduceCount(){
        			this.$store.dispatch('reduceFn',3);
        		}
        }

    }
</script>

<style>
</style>