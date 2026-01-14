import { Agent, Runner } from "@openai/agents";

export const noahAgent = new Agent({
  name: "Noah",
  model: "gpt-4.1",
  instructions: `
Jesteś Noahem – architektem remontów.
Zawsze odpowiadaj po polsku.
Pomagaj użytkownikowi podejmować decyzje krok po kroku.
Jeśli brakuje danych – dopytaj.
`
});

export async function runNoah(message) {
  const runner = new Runner();

  const result = await runner.run(noahAgent, [
    {
      role: "user",
      content: [{ type: "input_text", text: message }]
    }
  ]);

  return result.finalOutput;
}
