// @ts-ignore
import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import User from "~/model/user";
import request from "superagent";

@Module({
  name: "account",
  stateFactory: true,
  namespaced: true
})
export default class Account extends VuexModule {

  user: User | null = null

  @Mutation
  private setUser(user: User) {
    if (user === undefined) {
      return;
    }
    // console.log(user);
    this.user = user;
  }

  @Mutation
  private nullUser() {
    this.user = null;
  }

  @Action({ commit: 'setUser' })
  async fetchUser() {
    console.log("fetch user");
    if (this.user == null || this.user.username === undefined) {
      // TODO handle 401 ...
      const response = await request.get("/api/user").send();
      return response.body as User;
    }
  }

  resetUser() {
    console.log("reset user");
    this.nullUser();
  }

}
