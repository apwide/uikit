<template>
  <div>
    <Table :columns="columns" :data="data" drag-rows @rows-reordered="reorder" />
  </div>
</template>

<script>
import faker from 'faker'
import Table from '@/components/Table/KitTable'

const initialValues = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.name.firstName(),
  job: faker.name.jobTitle()
}))

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
      data: initialValues
    }
  },
  methods: {
    reorder(rows) {
      // eslint-disable-next-line no-console
      console.log(rows)
      this.data = rows
    }
  }
}
</script>
