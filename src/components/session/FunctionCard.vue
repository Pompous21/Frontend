<template>
  <div style="margin-right: 20px">
    <div style="height: 35px; margin-bottom: 15px; line-height: 35px; font-size: 25px">
      {{ this.functionName }}
    </div>
    <el-row style="margin: 0 0">
      <el-col :span="12" style="height: 450px; padding-right: 20px">
        <span>功能区</span>
        <div>
          <el-upload ref="upload" :action="'http://' + serverIp + ':' + bPort + '/files/upload'" list-type="picture-card"
                     :auto-upload="false" :file-list="fileList" :on-success="uploadSuccess">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
              <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleUpload()">
                <i class="el-icon-upload"></i>
              </span>
              <span  v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove()">
                <i class="el-icon-delete"></i>
              </span>
            </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </el-col>

      <el-col :span="12" style="height: 450px">
        <span>展示区</span>
        <div>
          <div class="demo-container">
            <el-image class="demo-img" :src="demoImgUrl_a" :fit="'contain'"></el-image>
            <el-image class="demo-img" :src="demoImgUrl_b" :fit="'contain'"></el-image>
          </div>
          <div class="demo-container">
            <el-image class="demo-img" :src="demoImgUrl_c" :fit="'contain'"></el-image>
            <el-image class="demo-img" :src="demoImgUrl_c" :fit="'contain'"></el-image>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {bPort, serverIp} from "../../../public/config";

  export default {
    name: "FunctionCard",
    props: {
      functionName: String,
      functionPath: String,

      demoImgUrl_a: String,
      demoImgUrl_b: String,
      demoImgUrl_c: String,
      demoImgUrl_d: String,
    },
    data() {
      return {
        serverIp: serverIp,
        bPort: bPort,

        fileList: [],
        uploadUrl: '',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleUpload() {
        this.$refs.upload.submit();
      },
      handleRemove() {
        this.$refs.upload.clearFiles();
      },
      uploadSuccess(res) {
        this.uploadUrl = res
        this.request.get(this.functionPath, {
          params: { rawUrl: this.uploadUrl }
        }).then(res => {
          window.open(res)
        })
      },
    }
  }
</script>

<style scoped>
  .demo-container {
    margin: 5px;
  }
  .demo-img {
    max-width: 200px;
    max-height: 200px;
    margin: 0 20px;
  }
</style>