import{_ as i,c as a,o as l,ae as t}from"./chunks/framework.tuuL-SzM.js";const c=JSON.parse('{"title":"C++开发环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"cpp-basics/environment-setup.md","filePath":"cpp-basics/environment-setup.md"}'),e={name:"cpp-basics/environment-setup.md"};function n(h,s,p,o,r,d){return l(),a("div",null,s[0]||(s[0]=[t(`<h1 id="c-开发环境搭建" tabindex="-1">C++开发环境搭建 <a class="header-anchor" href="#c-开发环境搭建" aria-label="Permalink to &quot;C++开发环境搭建&quot;">​</a></h1><p>在开始编写C++程序之前，我们需要先搭建开发环境。本章将介绍如何在不同操作系统上安装和配置C++开发环境。</p><h2 id="开发环境组成" tabindex="-1">开发环境组成 <a class="header-anchor" href="#开发环境组成" aria-label="Permalink to &quot;开发环境组成&quot;">​</a></h2><p>C++开发环境主要包括以下几个部分：</p><ol><li><strong>编译器</strong>：将C++源代码转换为可执行程序</li><li><strong>集成开发环境(IDE)</strong>：提供代码编辑、编译、调试等功能的软件</li><li><strong>调试工具</strong>：帮助查找和修复程序中的错误</li></ol><h2 id="windows系统" tabindex="-1">Windows系统 <a class="header-anchor" href="#windows系统" aria-label="Permalink to &quot;Windows系统&quot;">​</a></h2><h3 id="方法一-visual-studio-推荐初学者" tabindex="-1">方法一：Visual Studio（推荐初学者） <a class="header-anchor" href="#方法一-visual-studio-推荐初学者" aria-label="Permalink to &quot;方法一：Visual Studio（推荐初学者）&quot;">​</a></h3><p>Visual Studio是微软提供的功能强大的IDE，包含了C++编译器和丰富的开发工具。</p><ol><li>访问<a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noreferrer">Visual Studio下载页面</a></li><li>下载Visual Studio Community（免费版）</li><li>运行安装程序，选择&quot;使用C++的桌面开发&quot;工作负载</li><li>完成安装后，启动Visual Studio</li><li>创建新项目：选择&quot;文件&quot; &gt; &quot;新建&quot; &gt; &quot;项目&quot;，然后选择&quot;空项目&quot;模板</li></ol><div class="tip custom-block"><p class="custom-block-title">提示</p><p>Visual Studio Community版本对个人开发者、学生、开源项目和小型团队是完全免费的。</p></div><h3 id="方法二-mingw-w64" tabindex="-1">方法二：MinGW-w64 <a class="header-anchor" href="#方法二-mingw-w64" aria-label="Permalink to &quot;方法二：MinGW-w64&quot;">​</a></h3><p>MinGW-w64是Windows平台上的GCC编译器，适合希望使用开源工具的开发者。</p><ol><li>访问<a href="https://sourceforge.net/projects/mingw-w64/files/" target="_blank" rel="noreferrer">MinGW-w64下载页面</a></li><li>下载最新版本的安装程序</li><li>运行安装程序，选择适合你系统的版本（通常选择x86_64架构）</li><li>将MinGW的bin目录添加到系统环境变量PATH中</li><li>打开命令提示符，输入<code>g++ --version</code>验证安装是否成功</li></ol><h2 id="macos系统" tabindex="-1">macOS系统 <a class="header-anchor" href="#macos系统" aria-label="Permalink to &quot;macOS系统&quot;">​</a></h2><h3 id="方法一-xcode" tabindex="-1">方法一：Xcode <a class="header-anchor" href="#方法一-xcode" aria-label="Permalink to &quot;方法一：Xcode&quot;">​</a></h3><p>Xcode是苹果官方的IDE，包含了C++编译器和开发工具。</p><ol><li>打开App Store，搜索并安装Xcode</li><li>安装完成后，打开终端，运行<code>xcode-select --install</code>安装命令行工具</li><li>验证安装：在终端中输入<code>g++ --version</code></li></ol><h3 id="方法二-使用homebrew安装gcc" tabindex="-1">方法二：使用Homebrew安装GCC <a class="header-anchor" href="#方法二-使用homebrew安装gcc" aria-label="Permalink to &quot;方法二：使用Homebrew安装GCC&quot;">​</a></h3><ol><li>安装Homebrew（如果尚未安装）：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre></div></li><li>使用Homebrew安装GCC：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span></span></code></pre></div></li><li>验证安装：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g++-13</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div></li></ol><h2 id="linux系统" tabindex="-1">Linux系统 <a class="header-anchor" href="#linux系统" aria-label="Permalink to &quot;Linux系统&quot;">​</a></h2><p>Linux系统通常已经预装了GCC编译器，如果没有，可以通过包管理器安装。</p><h3 id="ubuntu-debian" tabindex="-1">Ubuntu/Debian <a class="header-anchor" href="#ubuntu-debian" aria-label="Permalink to &quot;Ubuntu/Debian&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-essential</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g++</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 验证安装</span></span></code></pre></div><h3 id="centos-rhel" tabindex="-1">CentOS/RHEL <a class="header-anchor" href="#centos-rhel" aria-label="Permalink to &quot;CentOS/RHEL&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Development Tools&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g++</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 验证安装</span></span></code></pre></div><h3 id="arch-linux" tabindex="-1">Arch Linux <a class="header-anchor" href="#arch-linux" aria-label="Permalink to &quot;Arch Linux&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g++</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 验证安装</span></span></code></pre></div><h2 id="代码编辑器" tabindex="-1">代码编辑器 <a class="header-anchor" href="#代码编辑器" aria-label="Permalink to &quot;代码编辑器&quot;">​</a></h2><p>除了IDE外，你还可以选择使用轻量级的代码编辑器，配合编译器使用：</p><ul><li><strong>Visual Studio Code</strong>：免费、开源、跨平台的代码编辑器，可以安装C/C++扩展</li><li><strong>Sublime Text</strong>：轻量级、高性能的代码编辑器</li><li><strong>Vim/Emacs</strong>：适合熟悉命令行的用户</li></ul><h2 id="编写第一个c-程序" tabindex="-1">编写第一个C++程序 <a class="header-anchor" href="#编写第一个c-程序" aria-label="Permalink to &quot;编写第一个C++程序&quot;">​</a></h2><p>环境搭建完成后，让我们编写一个简单的Hello World程序：</p><ol><li>创建一个名为<code>hello.cpp</code>的文件</li><li>输入以下代码：</li></ol><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, World!&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>编译并运行程序：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello.cpp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Linux/macOS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello.exe</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Windows</span></span></code></pre></div><p>如果一切正常，你应该能看到屏幕上显示&quot;Hello, World!&quot;。</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><p>现在你已经成功搭建了C++开发环境并运行了第一个程序，接下来我们将学习<a href="./basic-syntax.html">C++基本语法</a>。</p>`,39)]))}const u=i(e,[["render",n]]);export{c as __pageData,u as default};
