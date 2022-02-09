# 更新日志

🎉 此项目的更新内容将在此页持续记录，详情请参考 [What's new? #325](https://github.com/spencerwooo/onedrive-vercel-index/discussions/325) 。

#### 2022/2/8

- 🇨🇳/🇬🇧 - 项目已汉化 🥱
- 🎥 已支持 `.flv` 格式的视频
- 🔗 加强复制的链接的可读性

  ```diff
  - before: /api?path=/%F0%9F%8E%BB%20Genshin%20playlist/%E3%80%90%E5%8E%9F%E7%A5%9E%E3%80%91%E8%83%A1%E6%A1%83%EF%BC%9A%E5%95%8A%E5%AF%B9%E5%AF%B9%E5%AF%B9%E5%AF%B9.mp4&raw=true
  + after:  /api?path=/🎻%20Genshin%20playlist/【原神】胡桃：啊对对对对.mp4&raw=true
  ```

- 📅 你现在可以在 `site.config.js` 的 `datetimeFormat` 自定义日期格式了。

#### 2022/2/5

- 💠 正式支持布局切换！新增带缩略图预览的网格布局！

  ![Grid layout](./_images/grid-layout-images.png)

- 🗑 我们不再使用高性能消耗又难用的 `react-viewer` 。

#### 2022/2/2

- 🎥 我们删除了 `react-player` 而使用可靠的 `react-dplayer` 与 `react-audio-player` 来播放视频与音频。
- 🎇 我们现在还能为视频渲染缩略图：

  |                                  Before                                  |                                After                                |
  | :----------------------------------------------------------------------: | :-----------------------------------------------------------------: |
  | ![Old version doesn't render thumbnails](./_images/old-no-thumbnail.png) | ![New version renders thumbnails](./_images/new-with-thumbnail.png) |

- 💬 我们添加了对 WebVTT 字幕的支持，你只需要将 `.vtt` 后缀的与视频文件名相同的字幕文件放置在同一个文件夹下即可。

  |                                 Before                                  |                                    After                                     |
  | :---------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
  | ![Old version doesn't respect subtitles](./_images/old-no-subtitle.png) | ![New version tries to reference subtitles](./_images/new-with-subtitle.png) |

- ⚡️ 我们将包管理器从 `npm` 更换为 `pnpm` 以减少部署时间。你需要在 Vercel 中修改以下设置：

  ![Migrate from npm to pnpm](./_images/pnpm-commands.png)

  - Build command: `pnpm build`
  - Install command: `pnpm install`

#### 2022/1/29

- ❗**重要** - 配置文件已从 `.json` 切换到 `.config.js` ，并添加了注释。同时为了隐私着想，现在你还可以将 `userPrincipleName` 移动到 Vercel 的环境变量里。
- CORS 头现在出现在 OneDrive 的 `?raw=true` 文件直链路由中。

#### 2022/1/22

- 🔍 [Supporting search for all versions of OneDrive #295](https://github.com/spencerwooo/onedrive-vercel-index/discussions/295)

#### 2022/1/11

- 📚 [New documentation site live #264](https://github.com/spencerwooo/onedrive-vercel-index/discussions/264)

#### 2022/1/10

- 🚫 因遵循 Vercel 的服务条款，代理下载已被移除。 [Proxied download not working - 无法使用代理下载 #251](https://github.com/spencerwooo/onedrive-vercel-index/discussions/251)

#### 2022/1/1

- 🚀 我们在部署时不再需要额外的获取 token/secret 的步骤。 [New version update: No extra deployment setup is required anymore! #215](https://github.com/spencerwooo/onedrive-vercel-index/discussions/215)
