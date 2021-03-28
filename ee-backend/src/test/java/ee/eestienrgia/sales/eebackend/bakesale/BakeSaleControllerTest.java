package ee.eestienrgia.sales.eebackend.bakesale;

import ee.eestienrgia.sales.eebackend.bakesale.models.BakeSaleRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class BakeSaleControllerTest {
    private static  final String API_BAKESALE = "/api/1.0/bakeSales";

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    BakeSaleRepository bakeSaleRepository;

    @Test
    public void getBakeItems_WhenThereArnoItemsInDB_receiveOK(){
        ResponseEntity<Object> response = getBakeItems(new ParameterizedTypeReference<Object>() {
        });
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void getBakeItems_WhenThereArItemsInDB_receiveOK(){
        assertThat(bakeSaleRepository.count()).isGreaterThan(0);
    }

    public <T> ResponseEntity<T> getBakeItems(ParameterizedTypeReference<T> responseType){
        return testRestTemplate.exchange(API_BAKESALE, HttpMethod.GET, null, responseType);
    }

}
