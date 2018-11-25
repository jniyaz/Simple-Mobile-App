<template>
  <Page class="page">
      <ActionBar title="Reddit | Latest Posts" class="action-bar" />
      <ScrollView>
        <StackLayout class="home-panel">
          <!--Add your page content here-->
          <ListView class="list-group" for="post in posts" @itemTap="onItemTap" style="height:2000px">
            <v-template>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Image :src="post.data.thumbnail" class="thumb img-circle" />
                <Label :text="post.data.title" class="list-group-item-heading" style="width: 60%" />
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </ScrollView>
    </Page>
</template>

<script>
import axios from 'axios'
import RedditDetail from './RedditDetail'

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios.get('https://reddit.com/r/aww.json')
      .then(response => {
        this.posts = response.data.data.children
      })
  },
  methods: {
    onItemTap: function (args) {
      console.log('Item with index: ' + args.item.data.thumbnail + ' tapped');
      this.$navigateTo(RedditDetail, {
        props: {
            title: args.item.data.title,
            imageSrc: args.item.data.thumbnail
        }
      })
    },
  },
}
</script>