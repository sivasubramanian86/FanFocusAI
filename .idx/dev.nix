{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.python39Full
    pkgs.python311Packages.pip
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "start"
        ];
        env = {
          PORT = "$PORT";
        };
        manager = "web";
      };
    };
  };
}