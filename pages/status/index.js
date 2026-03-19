import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <GetInfoFromStatus />
    </>
  );
}

function GetInfoFromStatus() {
  const response = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  console.log(response);

  return (
    <>
      <pre>{JSON.stringify(response.data, "Carregando", 2)}</pre>
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}
