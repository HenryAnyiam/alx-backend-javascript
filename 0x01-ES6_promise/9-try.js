/* eslint-disable */
export default function guardrail(mathFunction) {
  let value;
  const queue = [];
  try {
    value = mathFunction();
  } catch (e) {
    value = `Error: ${e.message}`;
  } finally {
    queue.push(value, "Guardrail was processed");
  }
  return queue;
}
