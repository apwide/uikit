<template>
  <div>
    <Table :columns="columns" :data="data" />
  </div>
</template>

<script>
import faker from 'faker'
import Table from '@/components/Table/KitTable'

export default {
  name: 'TableStory',
  components: { Table },
  data() {
    return {
      columns: [
        {
          id: 'id',
          name: 'ID',
          width: 70
        },
        {
          id: 'name',
          name: 'Name'
        },
        {
          id: 'job',
          name: 'Job'
        }
      ],
      data: Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        name: faker.name.firstName(),
        job: faker.name.jobTitle()
      }))
    }
  }
}
</script>
