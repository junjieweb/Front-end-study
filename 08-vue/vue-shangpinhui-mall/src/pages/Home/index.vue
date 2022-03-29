<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch('getRecommends')
    this.$store.dispatch('getFloors')
  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>