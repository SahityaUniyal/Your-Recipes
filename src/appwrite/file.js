import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

class AppwriteFileService {
  client = new Client();
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.storage = new Storage(this.client);
  }
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite File :: upload File :: error", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Appwrite file :: delete file :: error", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(fileId);
    } catch (error) {
      console.error("Appwrite file :: get file preview :: error", error);
    }
  }
}

const appwriteFileService = new AppwriteFileService();
export default appwriteFileService;
