import conf from "../conf/conf";
import { Client, Databases, ID, Query } from "appwrite";

class AppwriteDatabaseService {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }
  async createRecipe({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite databases :: create Recipe :: error", error);
    }
  }
  async updateRecipe(documentId, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Appwrite databases :: update Recipe :: error", error);
    }
  }
  async deleteRecipe(documentId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
      return true;
    } catch (error) {
      console.error("Appwrite databases :: delete Recipe :: error", error);
    }
  }
  async getRecipe(documentId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
    } catch (error) {
      console.error("Appwrite databases :: get Recipe :: error", error);
    }
  }
  async getRecipes(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite databases :: get Recipes :: error", error);
    }
  }
  async getUserRecipes(userId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      console.error("Appwrite databases :: get users Recipes :: error", error);
    }
  }
}
const appwriteDatabaseService = new AppwriteDatabaseService();
export default appwriteDatabaseService;
