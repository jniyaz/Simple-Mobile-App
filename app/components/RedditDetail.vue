<template>
  <Page>
      <ActionBar title="Details"/>
      <StackLayout>
        <Label :text="this.title" class="heading" />
        <Image :src="this.imageSrc" />
        <Button text="Back" @tap="onButtonTap" />
      </StackLayout>
    </Page>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true,
    }
  },
  methods: {
    onButtonTap() {
        // console.log("Button was pressed");
        this.$navigateBack();
    },
  },
}
</script>

<style scoped>
    .heading {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        font-weight: 700;
        color: #333333;
    }
</style>