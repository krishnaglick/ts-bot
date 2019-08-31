import { config } from "dotenv";
config();

describe("Config Tests", () => {
  it("should have an app token available", () => {
    expect(process.env.CLIENT_TOKEN).toBeTruthy();
  });
});
