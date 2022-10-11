import { component$ } from '@builder.io/qwik';

export default component$(async () => {
  
  const res = await fetch('http://127.0.0.1:3333/header/5c5b20fb9f464d5f888e6deda6bba810')
  const data = await res.json()

  return (
    <header>
      <div class="logo">
        <a href="https://thesa.com.ar/" target="_blank">
          <img src={data.icon_url} />
        </a>
                                <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
                  Server management for growing teams
                </h1>     
      </div>
    </header>
  );
});
