<template>
    <div class="home">
        <v-app>
            <v-toolbar>
                <v-toolbar-side-icon/>
                <v-toolbar-title>Project X</v-toolbar-title>
                <v-spacer/>
                <v-toolbar-items>
                    <v-btn flat="true" href="/login"> Login</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-app>
    </div>
</template>

<script>

    export default {
        name: 'home'
    }
</script>
