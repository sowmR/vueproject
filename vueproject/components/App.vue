<template>
    <!--// main app //-->
    <x-app> 
        <!--// header bar can take a list of x-menu-item as children.. //-->
        <x-app-header slot="header" title="UI Components">
        </x-app-header>
        <x-page>
        <div slot="left">
            <h2>Left Sidebar</h2>
            <el-menu default-active="2">
                <el-menu-item index="1" @click="navigate('/')">Home page</el-menu-item>
                <el-menu-item index="2" @click="navigate('/tile')">Blank Tile</el-menu-item>
                <el-menu-item index="3" @click="navigate('/labelTextControl')">Label Text Control</el-menu-item>
                <el-menu-item index="4" @click="navigate('/textlabeltile')">Label Text Tile</el-menu-item>
                <el-menu-item index="5" @click="navigate('/bargraph')">Bar Graph</el-menu-item>
                <el-menu-item index="6" @click="navigate('/blockContainer')">Equal Margin Block</el-menu-item>
                <el-menu-item index="6" @click="navigate('/dataTable')">Data Table1</el-menu-item>
            </el-menu>
        </div>
        <div id="app_content_area">
            <router-view :state="state"></router-view>
        </div>
        
        </x-page>
        
    </x-app>
</template>

<script>
export default {
        // this is your main state
        // everything you need to keep aside of the network state
        props: ["state"]
    }
</script>