<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" v-bind:class="{ 'is-active' : tab.isActive}">
                    <a :href="tab.href" v-on:click.prevent.stop="selectTab(tab)">
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {

            return {
                tabs: []
            }
        },

        created(){
            this.tabs = this.$children;
        },

        methods: {
            selectTab(selectedTab){
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .tabs li {
        color: #797979;
        font-size: 18px;
        font-weight: 500;
    }

    .tabs li.is-active a {
        color: #ed4135;
        border-bottom: 3px solid #ed4135;

    }
    .tabs a {
        padding: 0.5em 2em 0.5em 0.5em;
        color: #797979;
        font-size: 18px;
        font-weight: 500;
        border-bottom:none;
    }
    .tabs ul {
        border-bottom: 1px solid #e9e9e9;
    }

    a:hover, a:focus {
        text-decoration:none;
    }

</style>