
// Mortgage calculation functions

/**
 * Calculate monthly mortgage payment
 * @param loanAmount - Principal amount of the loan
 * @param interestRate - Annual interest rate (as a percentage)
 * @param loanTerm - Loan term in years
 * @returns Monthly payment amount
 */
export function calculateMonthlyPayment(
  loanAmount: number,
  interestRate: number,
  loanTerm: number
): number {
  // Convert interest rate from annual percentage to monthly decimal
  const monthlyRate = interestRate / 100 / 12;
  // Convert loan term from years to months
  const numberOfPayments = loanTerm * 12;

  // If interest rate is 0, simple division
  if (monthlyRate === 0) {
    return loanAmount / numberOfPayments;
  }

  // Standard mortgage formula
  const payment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return payment;
}

/**
 * Calculate total payment amount over the life of the loan
 * @param monthlyPayment - Monthly payment amount
 * @param loanTerm - Loan term in years
 * @returns Total payment amount
 */
export function calculateTotalPayment(
  monthlyPayment: number,
  loanTerm: number
): number {
  return monthlyPayment * loanTerm * 12;
}

/**
 * Calculate total interest paid over the life of the loan
 * @param totalPayment - Total payment amount
 * @param loanAmount - Principal amount of the loan
 * @returns Total interest paid
 */
export function calculateTotalInterest(
  totalPayment: number,
  loanAmount: number
): number {
  return totalPayment - loanAmount;
}

/**
 * Generate amortization schedule
 * @param loanAmount - Principal amount of the loan
 * @param interestRate - Annual interest rate (as a percentage)
 * @param loanTerm - Loan term in years
 * @returns Array of payment details for each month
 */
export function generateAmortizationSchedule(
  loanAmount: number,
  interestRate: number,
  loanTerm: number
) {
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  let remainingBalance = loanAmount;
  let schedule = [];

  for (let month = 1; month <= numberOfPayments; month++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;

    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      remainingBalance: Math.max(0, remainingBalance)
    });
  }

  return schedule;
}
