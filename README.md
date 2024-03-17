<div class="sc-fWYGfq hHXxsM 
  grid
  grid-cols-1
  gap-3
  font-claude-message
  pr-9
  relative
"><div class="contents"><p class="whitespace-pre-wrap"></p>
<h1>Gemini Word Lookup Chrome Extension</h1>
<p class="whitespace-pre-wrap">This Chrome extension is a handy tool that allows you to quickly look up word definitions and examples using the Gemini API. It provides a convenient way to enhance your vocabulary and understand the usage of words in context.</p>
<h2>Features</h2>
<img src="/image.png" alt="Gemini Word Lookup Chrome Extension" align="right" width="200">
<ul class="list-disc pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="0"><strong>Word Explanation</strong>: Simply select a word and click the "Explain" button to retrieve its definition and examples using the Gemini API. The extension will display the information in a user-friendly manner.</li>
<li class="whitespace-normal" index="1"><strong>YouTube Caption Retrieval</strong>: When you're watching a video on YouTube, this extension enables you to easily retrieve the captions. Click the "Caption" button once to retrieve the upper caption, and click it again to retrieve the lower caption. The captions will be appended to the text area for easy reading or copying.</li>
<li class="whitespace-normal" index="2"><strong>Character Removal Toggle</strong>: The extension includes a toggle switch that allows you to remove the characters from the HTML content.</li>
<li class="whitespace-normal" index="3"><strong>Interactive Character</strong>: The extension features an interactive character that performs push-ups when you hold the Control key.</li>
</ul>
<h2>Requirements</h2>
<p class="whitespace-pre-wrap">The Gemini Word Lookup Chrome Extension requires the following Python libraries:</p>
<ul class="list-disc pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="0">Flask
<pre><div class="code-block flex flex-col bg-bg-300 rounded-lg -mb-0.5 full-width"><div class="code-block__header flex justify-between items-center py-1.5 px-3"><div><p class="text-xs text-text-400"></p></div><button class="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-text-500"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-500">Copy code</span></button></div><div><div class="code-block__code !my-0 !rounded-xl !text-sm !leading-relaxed" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none;"><span><span>pip install flask</span></span></code></div></div></div></pre>
</li>
<li class="whitespace-normal" index="1">Flask-CORS
<pre><div class="code-block flex flex-col bg-bg-300 rounded-lg -mb-0.5 full-width"><div class="code-block__header flex justify-between items-center py-1.5 px-3"><div><p class="text-xs text-text-400"></p></div><button class="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-text-500"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-500">Copy code</span></button></div><div><div class="code-block__code !my-0 !rounded-xl !text-sm !leading-relaxed" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none;"><span><span>pip install flask-cors</span></span></code></div></div></div></pre>
</li>
<li class="whitespace-normal" index="2">Markdown
<pre><div class="code-block flex flex-col bg-bg-300 rounded-lg -mb-0.5 full-width"><div class="code-block__header flex justify-between items-center py-1.5 px-3"><div><p class="text-xs text-text-400"></p></div><button class="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-text-500"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-500">Copy code</span></button></div><div><div class="code-block__code !my-0 !rounded-xl !text-sm !leading-relaxed" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none;"><span><span>pip install markdown</span></span></code></div></div></div></pre>
</li>
<li class="whitespace-normal" index="3">Google Generative AI
<pre><div class="code-block flex flex-col bg-bg-300 rounded-lg -mb-0.5 full-width"><div class="code-block__header flex justify-between items-center py-1.5 px-3"><div><p class="text-xs text-text-400"></p></div><button class="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-text-500"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-500">Copy code</span></button></div><div><div class="code-block__code !my-0 !rounded-xl !text-sm !leading-relaxed" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none;"><span><span>pip install google-generativeai</span></span></code></div></div></div></pre>
</li>
<li class="whitespace-normal" index="4">Pillow (PIL)
<pre><div class="code-block flex flex-col bg-bg-300 rounded-lg -mb-0.5 full-width"><div class="code-block__header flex justify-between items-center py-1.5 px-3"><div><p class="text-xs text-text-400"></p></div><button class="flex flex-row gap-1 items-center hover:bg-bg-200 p-1 py-0.5 rounded-md transition-opacity delay-100 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="mr-1 text-text-500"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-500">Copy code</span></button></div><div><div class="code-block__code !my-0 !rounded-xl !text-sm !leading-relaxed" style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code style="background: rgb(40, 44, 52); color: rgb(171, 178, 191); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: &quot;Fira Code&quot;, &quot;Fira Mono&quot;, Menlo, Consolas, &quot;DejaVu Sans Mono&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 2; hyphens: none;"><span><span>pip install pillow</span></span></code></div></div></div></pre>
</li>
</ul>
<p class="whitespace-pre-wrap">Make sure you have these libraries installed in your Python environment before running the extension. You can install them using the provided <code>pip install</code> commands.</p>
<h2>Installation</h2>
<p class="whitespace-pre-wrap">To install the Gemini Word Lookup Chrome Extension, follow these steps:</p>
<ol class="list-decimal pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="1">make sure to use your api key in new_flask pytohn file.</li>
<li class="whitespace-normal" index="2">Clone the repository or download the source code as a ZIP file.</li>
<li class="whitespace-normal" index="3">Open Google Chrome and navigate to the Extensions page (chrome://extensions/).</li>
<li class="whitespace-normal" index="4">Enable the "Developer mode" toggle switch located in the top right corner.</li>
<li class="whitespace-normal" index="5">Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension's source code.</li>
<li class="whitespace-normal" index="6">The Gemini Word Lookup Chrome Extension should now be installed and visible in your Chrome browser.</li>

</ol>
<h2>Usage</h2>
<ol class="list-decimal pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="0">To look up a word, simply select the word on any webpage and click the extension icon. Then, click the "Explain" button to retrieve its definition and examples.</li>
<li class="whitespace-normal" index="1">When watching a YouTube video, click the extension icon and then click the "Caption" button once to retrieve the upper caption. Click it again to retrieve the lower caption. The captions will be appended to the text area for easy reading or copying.</li>
<li class="whitespace-normal" index="2">If you want to remove specific characters from the retrieved HTML content, toggle the switch provided in the extension's popup window.</li>
<li class="whitespace-normal" index="3">To see the interactive character perform push-ups, hold the Control key while the extension is active.</li>
</ol>
<h2>Interactive Character Development</h2>
<p class="whitespace-pre-wrap">The interactive character was created using the following steps:</p>
<ol class="list-decimal pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="0">A video clip was selected from a series featuring the character.</li>
<li class="whitespace-normal" index="1">Adobe Premiere Pro was used to cut the character from the video.</li>
<li class="whitespace-normal" index="2">After Effects was used to refine the character's appearance and remove the background.</li>
<li class="whitespace-normal" index="3">The <code>transparent_background.py</code> script was used to remove the background from the video, resulting in a transparent background for the character.</li>
  <li class="whitespace-normal" index="4">Then utilize online tools to obtain the sprite sheet</li>
</ol>
<h2>Contributing</h2>
<p class="whitespace-pre-wrap">Contributions to the Gemini Word Lookup Chrome Extension are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository. If you'd like to contribute code improvements, feel free to fork the repository and submit a pull request.</p>
<p class="whitespace-pre-wrap">If you have any questions or inquiries,:</p>
<ul class="list-disc pl-8 space-y-2" depth="0">
<li class="whitespace-normal" index="0">Name: Ahmad Alharbi</li>
<li class="whitespace-normal" index="2">GitHub: <a target="_blank" href="https://github.com/ahmadalharbi21">ahmadalharbi21</a></li>
<li class="whitespace-normal" index="2">Linkedin: <a target="_blank" href="https://github.com/ahmadalharbi21">https://www.linkedin.com/in/ahmad-alharbi-44723125a/</a></li>
</ul>
<p class="whitespace-pre-wrap">Feel free to reach out with any feedback or concerns.</p></div></div>
