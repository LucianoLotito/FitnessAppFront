<script setup lang="ts">
import Editor from "primevue/editor";
import Button from "primevue/button";
import { newNutritionPlan } from "@/types/dataTypes";
import { ref } from "vue";
import authClient from "@/services/AuthClient";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

const newPlan = ref<newNutritionPlan>({
  title: "",
  description: "",
  body: "",
});

const createPlan = (plan: newNutritionPlan) => {
  plan.body = plan.body.replaceAll(
    "<img",
    '<img style="max-width: 100%; max-height: 100%"'
  );
  authClient.createNutritionPlan(plan).then((response) => {
    console.log(response);
  });
};
</script>
<template>
  <section>
    <Button
      class="flex flexbox col-4 col-offset-4"
      @click="createPlan(newPlan)"
      label="Create Plan"
    />
    <div class="flex">
      <label for="title" class="col-2 col-offset-3 p-invalid">Title</label>
      <InputText type="text" class="col-4" v-model="newPlan.title" />
    </div>
    <div class="flex">
      <label for="description" class="col-2 col-offset-3 p-invalid"
        >Description</label
      >
      <Textarea
        v-model="newPlan.description"
        class="col-4"
        rows="5"
        cols="30"
        style="resize: none"
      />
    </div>
    <Editor
      v-model="newPlan.body"
      editorStyle="height: 80vh"
      placeholder="Write your post here..."
      updatecon
    />
  </section>
</template>
