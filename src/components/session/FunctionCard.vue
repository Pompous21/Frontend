<template>
  <div style="margin-right: 20px">
    <div style="height: 35px; margin-bottom: 15px; line-height: 35px; font-size: 25px">
      功能1
    </div>
    <el-row style="margin: 0 0">
      <el-col :span="12" style="height: 450px; padding-right: 20px">
        <span>功能使用区</span>
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
      <el-col :span="12" style="height: 450px">功能展示区</el-col>
    </el-row>
  </div>
</template>

<script>
  import {bPort, serverIp} from "../../../public/config";

  export default {
    name: "FunctionCard",
    props: {

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
        this.request.get("/img/dith", {
          params: { rawUrl: this.uploadUrl }
        }).then(res => {
          window.open(res)
        })
      },
    }
  }
</script>

<style scoped>

</style>