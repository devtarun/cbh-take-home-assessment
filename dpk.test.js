const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the partitionKey of the event if it is present", () => {
    const event = { partitionKey: "abc" };
    expect(deterministicPartitionKey(event)).toBe("abc");
  });

  it("should return a sha3-512 hash of the event data if partitionKey is not present", () => {
    const event = { data: "test data" };
    const data = JSON.stringify(event);
    // prettier-ignore
    const expectedHash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  it("should return a sha3-512 hash of the partitionKey if it is longer than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = "a".repeat(300);
    const event = { partitionKey };
    // prettier-ignore
    const expectedHash = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  it("should return a string if candidate is not a string", () => {
    const event = { partitionKey: { key: "value" } };
    // prettier-ignore
    expect(deterministicPartitionKey(event)).toBe(JSON.stringify({ key: "value" }));
  });
});
