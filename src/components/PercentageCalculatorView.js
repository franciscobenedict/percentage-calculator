import React, {
  useState,
  useEffect,
} from 'react';
import SectionDivider from './partials/SectionDivider';
import Layout from './partials/Layout';
import DonutChart from 'react-donut-chart';

const PercentageCalculatorView = () => {
  const [pageTitle, setPageTitle] =               useState('');
  const [creditLimit, setCreditLimit] =           useState('');
  const [amountSpent, setAmountSpent] =           useState('');
  const [values, setValues] =                     useState({});
  const [result, setResult] =                     useState();
  const [unusedCredit, setUnusedCredit] =         useState();
  const [safeZone, setSafeZone] =                 useState(false);
  const [amberZone, setAmberZone] =               useState(false);
  const [dangerZone, setDangerZone] =             useState(false);
  const [superDangerZone, setSuperDangerZone] =   useState(false);
  const [safeAmount, setSafeAmount] =             useState();
  const isInvalid = creditLimit === '' || amountSpent === '';

  useEffect(() => {
    setPageTitle('Online percentage calculator');
  }, [pageTitle]);

  const handleCalculateChange = e => {
    e.preventDefault();
    let amount = parseFloat(values.amountSpent).toFixed(2);
    let limit = parseFloat(values.creditLimit).toFixed(2);
    let percentageUsed = parseFloat(amount / limit * 100).toFixed(1);
    setSafeAmount((limit / 100 * 24.99).toFixed(2));
    if (values) {
      parseFloat(setResult(percentageUsed));
      parseFloat(setUnusedCredit(100 - percentageUsed));
    }
  }

  useEffect(() => {
    result < 14.99 ? setSafeZone(true) : setSafeZone(false);
    result > 15 && result < 24.99 ? setAmberZone(true) : setAmberZone(false);
    result >= 25 && result < 99.99 ? setDangerZone(true) : setDangerZone(false);
    result >= 100 ? setSuperDangerZone(true) : setSuperDangerZone(false);
    setCreditLimit('');
    setAmountSpent('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, safeZone], amberZone, dangerZone);

  return (
    <Layout title={pageTitle} description="This is the percentage calculator page">
      <div className="sections_holder">
        <section className="section white">
          <h1>{pageTitle}</h1>
          <p>This tool helps the user to calculate the amount of percentage used from a credit limit or a ceiling amount specified.</p>
        </section>

        <SectionDivider />

        <section className="section grey">
          <h2>Get percentage used</h2>

          <form onSubmit={handleCalculateChange}>
            <div className="form_styles">

              {/* Credit limit */}
              <div className="form_input">
                <label><span>Credit limit</span></label>
                <span className="pound_symbol">£</span>
                <input
                  className="form_input"
                  name="creditLimit"
                  value={creditLimit}
                  onChange={e => setCreditLimit(e.target.value)}
                  type="number"
                  placeholder="Credit limit (e.g. £1050)"
                  autoComplete="off"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* Amount spent */}
              <div className="form_input">
                <label><span>Amount spent</span></label>
                <span className="pound_symbol">£</span>
                <input
                  className="form_input"
                  name="amountSpent"
                  value={amountSpent}
                  onChange={e => setAmountSpent(e.target.value)}
                  type="number"
                  placeholder="Amount spent (e.g. £249)"
                  autoComplete="off"
                  min="0"
                  step="0.01"
                />
              </div>

              <button className="form_submit_button" disabled={isInvalid} onClick={(e) => setValues({creditLimit, amountSpent})}>Calculate percentage used</button>
            </div>
          </form>
        </section>
        <SectionDivider />

        {/* RESULT */}
        {
          result &&
          <>
            <section className="section white">
              <h3>Your results</h3>

              {
                !superDangerZone ?
                <>
                <div className="chart_holder">
                  <DonutChart
                    className={'doughnut_chart'}
                    data={[
                      {
                        label: 'Credit used so far',
                        value: parseFloat(result),
                        className: 'percentage_used'
                      },
                      {
                        label: 'Unused credit',
                        value: parseFloat(unusedCredit),
                        isEmpty: true,
                        className: 'unused_credit'
                      }
                    ]}

                    color={['#43d14f', '#e91e63', '#9c27b0']}
                    height={500}
                    width={500}
                    legend={false}
                    startAngle={270}
                  />
                </div>
                </>
                :
                <></>
              }

              <div>
                <p>You are using <span>{result}</span>% of your credit limit.
                <br />
                &pound;<span>{values.amountSpent}</span> is <span>{result}</span>% of £<span>{values.creditLimit}</span>.</p>
              </div>
            </section>
            <SectionDivider />
          </>
        }

        {/* SAFEZONE */}
        {
          safeZone &&
          <>
            <section className="section safe_zone">
              <h3>All good!</h3>
              <p>Using <span>{result}</span>% (&pound;<span>{values.amountSpent}</span>) or below will not hurt your credit and are likely to help grow your credit. Reguarly using your credit and staying below this figure will help you keep a healthy credit score.</p>
            </section>
          </>
        }

        {/* AMBERZONE */}
        {
          amberZone &&
          <>
            <section className="section amber_zone">
              <h3>Relatively good!</h3>
              <p>Using <span>{result}</span>% (&pound;<span>{values.amountSpent}</span>) or below will not hurt your credit using less than this will likely to help grow your credit. Reguarly using your credit and staying below <span>{result}</span>% (&pound;<span>{values.amountSpent}</span>) will help you keep a healthy credit score.</p>
            </section>
          </>
        }

        {/* DANGER */}
        {
          dangerZone &&
          <>
            <section className="section danger_zone">
              <h3>Warning!</h3>
              <p>You are in danger of hurting your credit if you use up to 25% or above the total value of your credit limit. To be in the safe zone, ensure you are using &pound;<span>{safeAmount}</span> or less.</p>
            </section>
          </>
        }

        {/* SUPER DANGER */}
        {
          superDangerZone &&
          <>
            <section className="section super_danger_zone">
              <h3>STOP USING THIS CREDIT CARD!</h3>
              <p>You're using up to or above the actual card limit. This will extremely damage your credit.</p>
              <p>Pay off what you owe or get in contact with the card company and set up a payment system. Suggest a monthly token payment to help counter this damaging effect on your credit score.</p>
            </section>
          </>
        }
      </div>
    </Layout>
  )
}

export default PercentageCalculatorView;
