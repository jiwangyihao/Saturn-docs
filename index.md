---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Saturn AI"
  text: "类 MoE 混合专家架构的多源细胞知识库农业智能体"
  tagline: 以人为本的产前、产中、产后全生命周期智能农业服务
  actions:
    - theme: brand
      text: 快速了解
      link: "#图片展示"
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/jiwangyihao/Saturn-docs
  image:
    src: /logo.png
    alt: Saturn AI Logo

features:
  - title: 📌以人为本
    details: 以农户为中心，提供全生命周期智能农业服务
  - title: 🌏跨平台服务
    details: Web、App、小程序、智能硬件等多种平台服务
  - title: 🏡多源赋权
    details: 多源细胞知识库领域赋权，跨领域知识融合
---

## 图片展示

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';

const previewSrcList = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
  '/8.png',
  '/9.png',
];
</script>

<style>
</style>
