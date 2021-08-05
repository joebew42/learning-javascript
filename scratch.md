Salary Slip Kata

# DOING

- [f]Taxable income (higher rate): Any amount of money earned above a gross annual salary of £43,000.00 is taxed at 40%
  - Add a limit of 43000 for taxable income

# TODO

- [r] Consider to extract a builder for #calculateNationalInsuranceContributionFor
- [r] Consider to extract two methods object for the standardNationalInsuranceContribution and the higherNationalInsuranceContribution
- [r] Consider to extract the #nationalInsuranceContributionFrom into a separate class

## Iteration 4: for an annual gross salary of £45,000.00

This employee pays a higher band of National Insurance and Income Tax.

  <p>The monthly salary slip should contain the below:</p>

    Employee ID: 12345
    Employee Name: John J Doe
    Gross Salary: £3,750.00
    National Insurance contributions: £352.73
    Tax-free allowance: £916.67
    Taxable income: £2,833.33
    Tax Payable: £600.00


    taxable income = 45000 - 11000 = 34000 / 12 = 2833.33

    11000
    43000

    income = 45000

    1. taxable income = 43000 - 11000 = 32000 / 12 = 2666.67
    2. taxable income = 45000 - 43000 =  2000 / 12 =  166.67

    total taxable income = 2666.67 + 166.67 = 2833.34

    1. tax payble = 2666.67 * 0.2 = 533.33
    2. tax payble =  166.67 * 0.4 =  66.67

    tax payble = 1. tax payble + 2. tax payble = 533.33 + 66.67 = 600.0

    Tax-free allowance = Month Gross Salary - Taxable Income = 3750 - 2833.33 = 916.67


    tax payble = taxable income * 0.4 = 1133.332
