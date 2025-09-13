
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

/**
 * Calculate compound interest with regular contributions
 * @param principal - Initial investment amount
 * @param annualRate - Annual interest rate (as a percentage)
 * @param contributionAmount - Regular contribution amount
 * @param contributionFrequency - Frequency of contributions ('monthly', 'annually')
 * @param timeYears - Time period in years
 * @returns Compound interest calculation results
 */
export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  contributionAmount: number,
  contributionFrequency: string,
  timeYears: number
) {
  // Convert annual rate to decimal
  const rate = annualRate / 100;
  
  // Determine compounding frequency and contribution frequency
  const compoundingFrequency = contributionFrequency === 'monthly' ? 12 : 1;
  const contributionsPerYear = contributionFrequency === 'monthly' ? 12 : 1;
  
  // Calculate future value with compound interest
  const futureValuePrincipal = principal * Math.pow(1 + rate / compoundingFrequency, compoundingFrequency * timeYears);
  
  // Calculate future value of contributions (ordinary annuity)
  let futureValueContributions = 0;
  if (contributionAmount > 0) {
    const periodicRate = rate / contributionsPerYear;
    const totalPeriods = contributionsPerYear * timeYears;
    futureValueContributions = contributionAmount * ((Math.pow(1 + periodicRate, totalPeriods) - 1) / periodicRate);
  }
  
  const finalAmount = futureValuePrincipal + futureValueContributions;
  const totalContributions = contributionAmount * contributionsPerYear * timeYears;
  const totalInterestEarned = finalAmount - principal - totalContributions;
  
  return {
    final_amount: finalAmount,
    total_contributions: totalContributions,
    total_interest_earned: totalInterestEarned,
    principal_amount: principal
  };
}
