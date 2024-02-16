import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
class AppwriteAuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Appwrite Auth:: create account :: error ", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Appwrite auth :: login :: error", error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite auth :: get current user :: error", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Appwrite auth :: logout :: error", error);
      throw error;
    }
  }
  async updatePassword({ oldPassword, newPassword }) {
    try {
      return await this.account.updatePassword(newPassword, oldPassword);
    } catch (error) {
      console.error("Appwrite auth :: update password :: error", error);
      throw error;
    }
  }
}

const appwriteAuthService = new AppwriteAuthService();
export default appwriteAuthService;
