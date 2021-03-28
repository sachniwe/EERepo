package ee.eestienrgia.sales.eebackend.doantionsSale;

import ee.eestienrgia.sales.eebackend.bakesale.models.BakeSaleRepository;
import ee.eestienrgia.sales.eebackend.doantionsSale.models.DonationSaleRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class DonationsSaleControllerTest {
    private static  final String API_DONATIONSSALE = "/api/1.0/donationSales";

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    DonationSaleRepository donationSaleRepository;

    @Test
    public void getDonatedItems_WhenThereArnoItemsInDB_receiveOK(){
        ResponseEntity<Object> response = getDonatedItems(new ParameterizedTypeReference<Object>() {
        });
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void getDonatedItems_WhenThereArItemsInDB_receiveOK(){
        assertThat(donationSaleRepository.count()).isGreaterThan(0);
    }

    public <T> ResponseEntity<T> getDonatedItems(ParameterizedTypeReference<T> responseType){
        return testRestTemplate.exchange(API_DONATIONSSALE, HttpMethod.GET, null, responseType);
    }

}
