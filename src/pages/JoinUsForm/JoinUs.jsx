import React, { useState } from "react";
import "./AIIFAMembershipForm.css";

const defaultFormState = {
  companyName: "",
  factoryDistrict: "",
  factoryCity: "",
  factoryPhone: "",
  factoryPinCode: "",
  factoryMobile: "",
  factoryEmail1: "",
  factoryEmail2: "",
  correspondenceDistrict: "",
  correspondenceCity: "",
  correspondencePinCode: "",
  correspondenceMobile: "",
  correspondencePhone: "",
  correspondenceEmail1: "",
  correspondenceEmail2: "",
  representativeName: "",
  designation: "",
  representativeMobile: "",
  representativePinCode: "",
  representativeEmail: "",
  gstNumber: "",
  furnaceCapacity: "",
  furnaceMake: "",
  numberOfCrucible: "",
  bisNumber: "",
  productIngot: false,
  productBillet: false,
  bisYes: false,
  bisNo: false,
  bisAF: false,
  driIron: "",
  pelletIron: "",
  importedScrap: "",
  indigenousScrap: "",

  // Section 7
  dinManufacturerY: false,
  dinManufacturerN: false,
  processRouteGasBased: false,
  processRouteCoalBased: false,
  technology: "",
  annualCapacity: "",
  pelletProcess: "",
  pelletAnnualCapacity: "",

  // Section 8
  rollingMillIntegrated: false,
  rollingMillSisterConcern: false,

  // Section 9
  millCapacityRoughing: "",
  millCapacityIntermediate: "",
  millCapacityFinishing: "",

  // Section 10
  productTMT: false,
  productStructure: false,
  productOther: false,
  otherProductName: "",

  // Section 11
  brandName: "",
  powerConnectingLoad: "",

  // Section 12
  procurementSelfGenerating: false,
  procurementState: false,
  procurementOpenAccess: false,

  // Section 14
  bisCertificationMark: "",
};

const AIIFAMembershipForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState(defaultFormState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Membership submitted successfully!");

        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);

        setFormData(defaultFormState);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="aiifa-form-container">
      <div className="aiifa-header">
        
        <div className="association-name">
          AIIFA Sustainable Steel Manufacturers Association
        </div>
        <div className="former-name">
          (Formerly known as All India Induction Furnaces Association)
        </div>
        <div className="tagline">
          (Voice of Indian Sustainable Steel Manufacturing Sector)
        </div>
        <div className="form-title">
          AIIFA MEMBERSHIP FORM
        </div>
      </div>

      <div className="contact-info">
        504, Tower 1, Pearls Onaxe, Netaji Subhari Rice, Pianpura, Delhi - 110034<br />
        Mob: 9810410186 Tel: 011- 27351345/47/42725051 E-Mail: aalffa8@amail.com
      </div>

      <form onSubmit={handleSubmit} className="membership-form">
        {/* Previous sections 1-6 remain the same */}
        
        {/* Section 1: Company Name */}
        <div className="form-section">
          <div className="section-number">1.</div>
          <div className="section-content">
            <label className="section-label">NAME OF THE COMPANY (IN BLOCK LETTERS)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="company-input"
              placeholder="Enter company name in block letters"
              required
            />
          </div>
        </div>

        {/* Section 2: Factory Address */}
        <div className="form-section">
          <div className="section-number">2.</div>
          <div className="section-content">
            <label className="section-label">FACTORY ADDRESS</label>
            <div className="address-grid">
              <div className="input-group">
                <span className="input-label">DISTT:</span>
                <input
                  type="text"
                  name="factoryDistrict"
                  value={formData.factoryDistrict}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-label">CITY:</span>
                <input
                  type="text"
                  name="factoryCity"
                  value={formData.factoryCity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-label">PHONE NO.:</span>
                <input
                  type="text"
                  name="factoryPhone"
                  value={formData.factoryPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-label">PIN CODE:</span>
                <input
                  type="text"
                  name="factoryPinCode"
                  value={formData.factoryPinCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-label">MOBILE NO.:</span>
                <input
                  type="text"
                  name="factoryMobile"
                  value={formData.factoryMobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group full-width">
                <span className="input-label">E-MAIL ID 1:</span>
                <input
                  type="email"
                  name="factoryEmail1"
                  value={formData.factoryEmail1}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group full-width">
                <span className="input-label">E-MAIL ID 2:</span>
                <input
                  type="email"
                  name="factoryEmail2"
                  value={formData.factoryEmail2}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Correspondence Address */}
        <div className="form-section">
          <div className="section-number">3.</div>
          <div className="section-content">
            <label className="section-label">ADDRESS FOR CORRESPONDENCE:</label>
            <div className="address-grid">
              <div className="input-group">
                <span className="input-label">DISTT:</span>
                <input
                  type="text"
                  name="correspondenceDistrict"
                  value={formData.correspondenceDistrict}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">CITY:</span>
                <input
                  type="text"
                  name="correspondenceCity"
                  value={formData.correspondenceCity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">PIN CODE:</span>
                <input
                  type="text"
                  name="correspondencePinCode"
                  value={formData.correspondencePinCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">MOBILE NO.:</span>
                <input
                  type="text"
                  name="correspondenceMobile"
                  value={formData.correspondenceMobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">PHONE NO.:</span>
                <input
                  type="text"
                  name="correspondencePhone"
                  value={formData.correspondencePhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group full-width">
                <span className="input-label">E-MAIL ID 1:</span>
                <input
                  type="email"
                  name="correspondenceEmail1"
                  value={formData.correspondenceEmail1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group full-width">
                <span className="input-label">E-MAIL ID 2:</span>
                <input
                  type="email"
                  name="correspondenceEmail2"
                  value={formData.correspondenceEmail2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Representative */}
        <div className="form-section">
          <div className="section-number">4.</div>
          <div className="section-content">
            <label className="section-label">NAME OF REPRESENTATIVE:</label>
            <div className="representative-grid">
              <div className="input-group">
                <input
                  type="text"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleInputChange}
                  placeholder="Name"
                />
              </div>
              <div className="input-group">
                <span className="input-label">DESIGNATION:</span>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">MOBILE NO.:</span>
                <input
                  type="text"
                  name="representativeMobile"
                  value={formData.representativeMobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">PIN CODE:</span>
                <input
                  type="text"
                  name="representativePinCode"
                  value={formData.representativePinCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group full-width">
                <span className="input-label">EMAIL ID 1:</span>
                <input
                  type="email"
                  name="representativeEmail"
                  value={formData.representativeEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: GST & Furnace Details */}
        <div className="form-section">
          <div className="section-number">5.</div>
          <div className="section-content">
            <div className="furnace-details-grid">
              <div className="input-group">
                <span className="input-label">GST No.:</span>
                <input
                  type="text"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">FURNACE CAPACITY:</span>
                <input
                  type="text"
                  name="furnaceCapacity"
                  value={formData.furnaceCapacity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">MAKE:</span>
                <input
                  type="text"
                  name="furnaceMake"
                  value={formData.furnaceMake}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">NO. OF CRUCIBLE:</span>
                <input
                  type="text"
                  name="numberOfCrucible"
                  value={formData.numberOfCrucible}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="product-section">
              <label className="section-label">PRODUCT [PL. TICK THE OPTIONS GIVEN BELOW]:</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="productIngot"
                    checked={formData.productIngot}
                    onChange={handleInputChange}
                  />
                  <label>INGOT</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="productBillet"
                    checked={formData.productBillet}
                    onChange={handleInputChange}
                  />
                  <label>BILLET:</label>
                </div>
                <div className="checkbox-item">
                  <span className="input-label">BIS NO.:</span>
                  <input
                    type="text"
                    name="bisNumber"
                    value={formData.bisNumber}
                    onChange={handleInputChange}
                    className="bis-input"
                  />
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="bisYes"
                    checked={formData.bisYes}
                    onChange={handleInputChange}
                  />
                  <label>(Y)</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="bisNo"
                    checked={formData.bisNo}
                    onChange={handleInputChange}
                  />
                  <label>(N)</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="bisAF"
                    checked={formData.bisAF}
                    onChange={handleInputChange}
                  />
                  <label>(AF)</label>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section 6: Raw Materials */}
          <div className="form-section">
            <div className="section-number">6.</div>
            <div className="section-content">
              <label className="section-label">RAW MATERIAL USED:</label>
              <div className="raw-materials-grid">
                <div className="input-group">
                  <span className="input-label">DRI IRON:</span>
                  <input
                    type="text"
                    name="driIron"
                    value={formData.driIron}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">PELLET IRON:</span>
                  <input
                    type="text"
                    name="pelletIron"
                    value={formData.pelletIron}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">IMPORTED SCRAP:</span>
                  <input
                    type="text"
                    name="importedScrap"
                    value={formData.importedScrap}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">INDIGENEOUS SCRAP:</span>
                  <input
                    type="text"
                    name="indigenousScrap"
                    value={formData.indigenousScrap}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

        {/* Section 7: DIN Manufacturer & Pellet Manufacturer */}
        <div className="form-section">
          <div className="section-number">7.</div>
          <div className="section-content">
            <label className="section-label">ARE YOU:</label>
            
            <div className="subsection">
              <div className="subsection-label">(A) DIN MANUFACTURER:</div>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="dinManufacturerY"
                    checked={formData.dinManufacturerY}
                    onChange={handleInputChange}
                  />
                  <label>(Y)</label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="dinManufacturerN"
                    checked={formData.dinManufacturerN}
                    onChange={handleInputChange}
                  />
                  <label>(N)</label>
                </div>
              </div>
              
              <div className="process-route-section">
                <div className="subsection-label">PROCESS ROUTE:</div>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      name="processRouteGasBased"
                      checked={formData.processRouteGasBased}
                      onChange={handleInputChange}
                    />
                    <label>GAS BASED</label>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      name="processRouteCoalBased"
                      checked={formData.processRouteCoalBased}
                      onChange={handleInputChange}
                    />
                    <label>COAL BASED</label>
                  </div>
                </div>
                
                <div className="input-row">
                  <div className="input-group mb-1">
                    <span className="input-label">TECHNOLOGY:</span>
                    <input
                      type="text"
                      name="technology"
                      value={formData.technology}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-label">ANNUAL CAPACITY:</span>
                    <input
                      type="text"
                      name="annualCapacity"
                      value={formData.annualCapacity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <div className="subsection-label">(B) PELLET MANUFACTURER:</div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">PROCESS:</span>
                  <input
                    type="text"
                    name="pelletProcess"
                    value={formData.pelletProcess}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">ANNUAL CAPACITY:</span>
                  <input
                    type="text"
                    name="pelletAnnualCapacity"
                    value={formData.pelletAnnualCapacity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Rolling Mill Details */}
        <div className="form-section">
          <div className="section-number">8.</div>
          <div className="section-content">
            <label className="section-label">ROLLING MILL DETAILS:</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="rollingMillIntegrated"
                  checked={formData.rollingMillIntegrated}
                  onChange={handleInputChange}
                />
                <label>INTEGRATED</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="rollingMillSisterConcern"
                  checked={formData.rollingMillSisterConcern}
                  onChange={handleInputChange}
                />
                <label>SISTER CONCERN</label>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: Mill Capacity */}
        <div className="form-section">
          <div className="section-number">9.</div>
          <div className="section-content">
            <label className="section-label">MILL CAPACITY (pip):</label>
            <div className="mill-capacity-grid">
              <div className="input-group">
                <span className="input-label">ROUGHING [IN INCH]:</span>
                <input
                  type="text"
                  name="millCapacityRoughing"
                  value={formData.millCapacityRoughing}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">INTERMEDIATE [IN INCH]:</span>
                <input
                  type="text"
                  name="millCapacityIntermediate"
                  value={formData.millCapacityIntermediate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">FINISHING [IN INCH]:</span>
                <input
                  type="text"
                  name="millCapacityFinishing"
                  value={formData.millCapacityFinishing}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 10: Product Name */}
        <div className="form-section">
          <div className="section-number">10.</div>
          <div className="section-content">
            <label className="section-label">NAME OF THE PRODUCT:</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="productTMT"
                  checked={formData.productTMT}
                  onChange={handleInputChange}
                />
                <label>TMT</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="productStructure"
                  checked={formData.productStructure}
                  onChange={handleInputChange}
                />
                <label>STRUCTURE</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="productOther"
                  checked={formData.productOther}
                  onChange={handleInputChange}
                />
                <label>OTHER</label>
                {formData.productOther && (
                  <input
                    type="text"
                    name="otherProductName"
                    value={formData.otherProductName}
                    onChange={handleInputChange}
                    placeholder="Specify other product"
                    className="other-product-input"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: Brand Name & Power */}
        <div className="form-section">
          <div className="section-number">11.</div>
          <div className="section-content">
            <div className="brand-power-grid">
              <div className="input-group">
                <span className="input-label">BRAND NAME:</span>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-label">POWER-CONNECTING LOAD (KVA):</span>
                <input
                  type="text"
                  name="powerConnectingLoad"
                  value={formData.powerConnectingLoad}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 12: Procurement Source */}
        <div className="form-section">
          <div className="section-number">12.</div>
          <div className="section-content">
            <label className="section-label">PROCUREMENT SOURCE:</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="procurementSelfGenerating"
                  checked={formData.procurementSelfGenerating}
                  onChange={handleInputChange}
                />
                <label>SELF GENERATING</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="procurementState"
                  checked={formData.procurementState}
                  onChange={handleInputChange}
                />
                <label>STATE</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="procurementOpenAccess"
                  checked={formData.procurementOpenAccess}
                  onChange={handleInputChange}
                />
                <label>OPEN ACCESS</label>
              </div>
            </div>
          </div>
        </div>

        {/* Section 14: BIS Certification */}
        <div className="form-section">
          <div className="section-number">14.</div>
          <div className="section-content">
            <label className="section-label">PLEASE GIVE BIS CERTIFICATION MARK IF TAKEN BY YOU:</label>
            <input
              type="text"
              name="bisCertificationMark"
              value={formData.bisCertificationMark}
              onChange={handleInputChange}
              className="bis-certification-input"
              placeholder="Enter BIS Certification Mark"
            />
          </div>
        </div>

        {/* Company Seal & Signature */}
        <div className="form-section signature-section">
          <div className="section-content">
            <label className="section-label">COMPANY SEAL & SIGNATURE</label>
            <div className="signature-area">
              <div className="signature-box"></div>
            </div>
          </div>
        </div>

        {/* AIIFA Office Section */}
        <div className="form-section office-section">
          <div className="section-content">
            <label className="section-label">FOR AIIFA OFFICE:</label>
            <div className="office-details">
              <div className="input-group">
                <span className="input-label">Membership No.</span>
                <div className="dashed-line"></div>
              </div>
              <div className="input-group">
                <span className="input-label">Date of enrollment</span>
                <div className="dashed-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Fees Table */}
        <div className="membership-fees-section">
          <h3 className="fees-title">AIIFA MEMBERSHIP FEES w. e. f. 01° OCTOBER, 2023</h3>
          <table className="fees-table">
            <thead>
              <tr>
                <th>SR. NO.</th>
                <th>Category</th>
                <th>Annual Membership Fee</th>
                <th>Admission Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Life Members</td>
                <td>Rs. 5,00,000/- one time fee (RCM Applicable)</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Members (India)</td>
                <td>Rs. 15000/- Plus GST w.e.f. 01.10.2023</td>
                <td>Rs. 15000/-</td>
              </tr>
              <tr>
                <td></td>
                <td>Member (Abroad)</td>
                <td>US$.500 w.e.f. 01.10.2013</td>
                <td>US$ 250</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Affiliate Member</td>
                <td>Rs. 20,000/- plus GST @ 18% w.e.f. 01.10.2023<br />
                    (Companies from [b] to [d] of para 2.1 (i) of Bye-Laws)</td>
                <td>Rs. 15000/-</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Associate Member</td>
                <td>Rs. 2000/- As in para 2.1 (j) (f) of Bye Laws</td>
                <td>Rs. 5000/-</td>
              </tr>
            </tbody>
          </table>
          
          <div className="notes-section">
            <p><strong>Note:</strong> The Membership Application Form is available at: www.aalfli.org. GST is extra as per admissible</p>
          </div>

          <div className="bank-details">
            <h4>Bank Details:</h4>
            <div className="bank-grid">
              <div className="bank-item">
                <strong>1. Axis Bank:</strong> 196, Shafiqur Bagh, Delhi-110088<br />
                A/c No.: 263010100004586<br />
                RTGS/IFSC: UTIB0000263
              </div>
              <div className="bank-item">
                <strong>2. Yes Bank:</strong> A - 42, Vishal Enclave, Opp to TD Mall, N.D. - 110027<br />
                A/c No.: 00309460000783<br />
                IFSC: YESB0000030
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit Membership Form
          </button>
        </div>
      </form>

    {successMessage && (
  <div className="success-toast">
    {successMessage}
  </div>
)}

    </div>
  );
};
export default AIIFAMembershipForm;
