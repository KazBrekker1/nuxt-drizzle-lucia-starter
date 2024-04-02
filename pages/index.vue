<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

const loading = ref(false);

const user = useAuthenticatedUser();

const handleLogout = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  loading.value = true;
  await $fetch("/api/logout", {
    method: "POST",
    redirect: "manual",
  });
  loading.value = false;
  await navigateTo("/login");
};
</script>

<template>
  <UCard class="min-w-[30rem]">
    <template #header>
      <h1>Profile</h1>
    </template>
    <p>User id: {{ user.userId }}</p>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <template #footer>
      <form method="post" action="/api/logout" @submit.prevent="handleLogout">
        <UButton
          style="view-transition-name: auth-card-submit"
          type="submit"
          label="Sign out"
          :loading="loading"
          color="red"
          block
        />
      </form>
    </template>
  </UCard>
</template>
