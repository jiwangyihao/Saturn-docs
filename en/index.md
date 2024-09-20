---
# translate to English
layout: home

hero:
  name: "Saturn AI"
  text: "MoE-like agricultural agent utilizes cell-like, multi-source knowledge"
  tagline: Human-centered services throughout the lifecycle
  actions:
    - theme: brand
      text: Quick Start
      link: "#image-display"
    - theme: alt
      text: View on GitHub
      link: https://github.com/jiwangyihao/Saturn-docs
  image:
    src: /logo.png
    alt: Saturn AI Logo

features:
  - title: 📌Human-centered
    details: Human-centered services throughout the lifecycle
  - title: 🌏Cross-platform
    details: Web, App, Mini Program, Smart Hardware, and more
  - title: 🏡Multi-source empowerment
    details: Multi-source cell knowledge base domain empowerment, cross-domain knowledge fusion
---

## Image Display

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';
// import 'element-plus/es/components/carousel/style/css';
// import 'element-plus/es/components/carousel-item/style/css';
// import 'element-plus/es/components/image/style/css';
// import 'element-plus/es/components/image-viewer/style/css';

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
