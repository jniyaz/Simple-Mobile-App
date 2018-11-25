<template>
    <Page>
        <ActionBar class="action-bar" title="Home" />
        <StackLayout>
            <Button class="btn btn-primary" @tap="$router.push('/reddit')">Reddit</Button>
        </StackLayout>
    </Page>
</template>
