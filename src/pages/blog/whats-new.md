# What's new?

🎉 This is a constantly updating page of new updates for this project. Also available at [What's new? #325](https://github.com/spencerwooo/onedrive-vercel-index/discussions/325).

#### 2022/2/2

- ⚡️ We have migrated from `npm` to `pnpm` as project's package manager for faster build speed and more efficient cache usage. You may need to update your Vercel's build commands:

  ![Migrate from npm to pnpm](./_images/pnpm-commands.png)

  - Build command: `pnpm build`
  - Install command: `pnpm install`
- ...

#### 2022/1/29

- ❗**Breaking** - Config files changed from `.json` to `.config.js`, relevant comments added. You can now move `userPrincipleName` to Vercel's environment variables (to avoid exposing your email address publicly).
- CORS headers are now present in `?raw=true` routes for OneDrive raw file links.

#### 2022/1/22

- 🔍 [Supporting search for all versions of OneDrive #295](https://github.com/spencerwooo/onedrive-vercel-index/discussions/295)

#### 2022/1/11

- 📚 [New documentation site live #264](https://github.com/spencerwooo/onedrive-vercel-index/discussions/264)

#### 2022/1/10

- 🚫 Removed support for proxied download because of Vercel restrictions: [Proxied download not working - 无法使用代理下载 #251](https://github.com/spencerwooo/onedrive-vercel-index/discussions/251).

#### 2022/1/1

- 🚀 We now no longer need extra deployment tokens/secret setups: [New version update: No extra deployment setup is required anymore! #215](https://github.com/spencerwooo/onedrive-vercel-index/discussions/215)
