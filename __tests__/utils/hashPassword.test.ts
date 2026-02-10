import { describe, it, expect } from "vitest";

// Mirror of the hashPassword function from app/investor-portal/page.tsx
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

describe("hashPassword", () => {
  it("returns a 64-character hex string", async () => {
    const result = await hashPassword("test");
    expect(result).toHaveLength(64);
    expect(result).toMatch(/^[0-9a-f]+$/);
  });

  it("produces different hashes for different inputs", async () => {
    const hash1 = await hashPassword("password1");
    const hash2 = await hashPassword("password2");
    expect(hash1).not.toBe(hash2);
  });

  it("produces the same hash for the same input", async () => {
    const hash1 = await hashPassword("same-input");
    const hash2 = await hashPassword("same-input");
    expect(hash1).toBe(hash2);
  });

  it("handles empty string input", async () => {
    const result = await hashPassword("");
    // SHA-256 of empty string is well-known
    expect(result).toBe(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    );
  });
});
