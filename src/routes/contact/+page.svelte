<script lang="ts">
  const email = "hasini.thakkallapelly34@gmail.com";
  const github = "https://github.com/hasinithakkallapelly";
  const linkedin = "https://linkedin.com/in/hasinithakkallapelly";
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-6">
  <div class="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
    <h1 class="text-2xl font-bold mb-2">Let's talk</h1>
    <p class="text-gray-600 mb-6">Feel free to reach out — I'd love to hear from you.</p>

    <a href="mailto:{email}" class="block w-full bg-black text-white py-3 rounded-lg mb-3 font-medium hover:bg-gray-800 transition">
      Email Me
    </a>

    <div class="flex justify-center gap-4 mt-4">
      <a href={github} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black underline">
        GitHub
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black underline">
        LinkedIn
      </a>
    </div>
  </div>
</div>